export async function POST({ request }) {
  const data = await request.json();

  const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
  const requestHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const requestBody = new URLSearchParams({
    secret: "YOUR_SITE_SECRET_KEY", // Il peut s'agir d'une variable d'environnement
    response: data.recaptcha, // Le jeton transmis par le client
  });

  const response = await fetch(recaptchaURL, {
    method: "POST",
    headers: requestHeaders,
    body: requestBody.toString(),
  });

  const responseData = await response.json();

  return new Response(JSON.stringify(responseData), { status: 200 });
}
