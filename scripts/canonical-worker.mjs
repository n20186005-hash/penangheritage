export default {
  /** @param {Request} request @param {{ASSETS: {fetch: (request: Request) => Promise<Response>}}} env */
  async fetch(request, env) {
    const url = new URL(request.url);
    if ((url.hostname === 'penangheritage.org' || url.hostname === 'www.penangheritage.org') && (url.protocol !== 'https:' || url.hostname !== 'penangheritage.org')) {
      url.protocol = 'https:';
      url.hostname = 'penangheritage.org';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    const errorUrl = new URL('/404', url);
    const errorPage = await env.ASSETS.fetch(new Request(errorUrl, { method: 'GET' }));
    const headers = new Headers(errorPage.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    return new Response(request.method === 'HEAD' ? null : errorPage.body, { status: 404, headers });
  }
};
