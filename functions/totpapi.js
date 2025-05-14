async function generateTOTP(secret, timeStep = 30, digits = 6) {
  const base32ToHex = (base32) => {
    const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let bits = '';
    let hex = '';

    base32 = base32.replace(/=+$/, '');

    for (let i = 0; i < base32.length; i++) {
      const val = base32chars.indexOf(base32.charAt(i).toUpperCase());
      bits += val.toString(2).padStart(5, '0');
    }

    for (let i = 0; i + 4 <= bits.length; i += 4) {
      const chunk = bits.substring(i, i + 4);
      hex += parseInt(chunk, 2).toString(16);
    }

    return hex;
  };

  const epoch = Math.floor(Date.now() / 1000);
  const time = Math.floor(epoch / timeStep);
  const key = base32ToHex(secret);
  const timeHex = time.toString(16).padStart(16, '0');

  const keyBuffer = new Uint8Array(key.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  const timeBuffer = new Uint8Array(timeHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign']
  );

  const hmac = await crypto.subtle.sign('HMAC', cryptoKey, timeBuffer);
  const hmacArray = new Uint8Array(hmac);
  const offset = hmacArray[hmacArray.length - 1] & 0xf;

  const binaryCode =
    ((hmacArray[offset] & 0x7f) << 24) |
    ((hmacArray[offset + 1] & 0xff) << 16) |
    ((hmacArray[offset + 2] & 0xff) << 8) |
    (hmacArray[offset + 3] & 0xff);

  return (binaryCode % 10 ** digits).toString().padStart(digits, '0');
}

export async function onRequest(context) {
  const { request } = context;
  if (request.method === 'POST') {
    const { secret } = await request.json();

    if (!secret) {
      return new Response(JSON.stringify({ error: 'Secret is required' }), { status: 400 });
    }

    try {
      const code = await generateTOTP(secret);
      return new Response(JSON.stringify({ code }), { status: 200 });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Error generating TOTP code' }), { status: 500 });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
}
