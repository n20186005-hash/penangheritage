// @ts-expect-error This relative module is generated beside the wrapper during build.
import app from './_worker.js/index.js';

export default {
  /** @param {Request} request @param {any} env @param {any} context */
  async fetch(request, env, context) {
    const url = new URL(request.url);
    if ((url.hostname === 'penangheritage.org' || url.hostname === 'www.penangheritage.org') && (url.protocol !== 'https:' || url.hostname !== 'penangheritage.org')) {
      url.protocol = 'https:';
      url.hostname = 'penangheritage.org';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return app.fetch(request, env, context);
  }
};
