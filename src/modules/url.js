import url from 'url';

export default function parsearUrl(urlString) {
    try {
        const parsed = url.parse(urlString, true);
        return {
            host: parsed.host,
            pathname: parsed.pathname,
            params: parsed.query
        };
    } catch (err) {
        console.error('Error al parsear la URL:', err);
        return null;
    }
}