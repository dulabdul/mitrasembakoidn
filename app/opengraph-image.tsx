import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Mitra Sembako IDN - Pusat Grosir Sembako';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Warna Utama Template
  const brandColor = '#B67529';

  // URL Placeholder Gambar (Ganti ini dengan URL gambar keranjang/logo asli Anda)
  // Pastikan URL gambar adalah Absolute URL (https://...)
  const cartImageUrl =
    'https://cdn.study-w-ar.space/assets/about-mitrasembako.jpg';

  return new ImageResponse(
    (
      // Container Utama
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc', // Slate-50
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #e2e8f0 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e2e8f0 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          fontFamily: 'sans-serif',
        }}>
        {/* Dekorasi Background Circle - Disesuaikan agar harmonis dengan #B67529 */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            height: '400px',
            width: '400px',
            borderRadius: '100%',
            background: 'rgba(182, 117, 41, 0.15)', // Varian transparan dari #B67529
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            height: '300px',
            width: '300px',
            borderRadius: '100%',
            background: 'rgba(249, 115, 22, 0.1)', // Orange tipis (tetap masuk)
            filter: 'blur(80px)',
          }}
        />

        {/* Logo / Brand Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            padding: '20px',
            borderRadius: '24px',
            // Shadow diubah dari hijau ke nuansa coklat/orange gelap
            boxShadow: '0 10px 30px rgba(182, 117, 41, 0.4)',
          }}>
          {/* GANTI SVG DENGAN IMAGE */}
          <img
            src={cartImageUrl}
            width='200'
            height='200'
            style={{
              objectFit: 'contain',
              borderRadius: '16px', // Opsional: jika ingin sedikit rounded
            }}
          />
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#1e293b',
            lineHeight: 1.1,
            textAlign: 'center',
            marginBottom: '20px',
            display: 'flex',
          }}>
          Mitra Sembako IDN
        </div>

        {/* Subtitle / Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#64748B',
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.4,
          }}>
          Pusat Toko Sembako Murah & Terpercaya
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Background diubah dari Hijau Mint (#F0FDF4) ke Cream/Light Orange (#fff7ed) agar harmonis
            background: '#fff7ed',
            border: `2px solid ${brandColor}`,
            padding: '12px 32px',
            borderRadius: '50px',
            color: brandColor, // Text disamakan dengan warna border (#B67529)
            fontSize: 24,
            fontWeight: 600,
          }}>
          Siap Antar Seluruh Indonesia
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
