// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     experimental: {
//         ppr: 'incremental',
//       },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      // Remova a chave 'ppr' se não for necessária
      // Incremental Static Regeneration pode ser configurado via `revalidate` diretamente nas páginas
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
