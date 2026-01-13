/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
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

  // URL Gambar
  const imageUrl = 'https://cdn.study-w-ar.space/assets/about-mitrasembako.jpg';

  // --- SOLUSI: FETCH MANUAL GAMBAR ---
  // Kita fetch dulu gambarnya menjadi ArrayBuffer agar Next.js bisa membacanya dengan pasti
  const imageBuffer = await fetch(imageUrl).then((res) => {
    if (!res.ok) {
      throw new Error('Gagal mengambil gambar');
    }
    return res.arrayBuffer();
  });

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
        {/* Dekorasi Background Circle */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            height: '400px',
            width: '400px',
            borderRadius: '100%',
            background: 'rgba(182, 117, 41, 0.15)',
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
            background: 'rgba(249, 115, 22, 0.1)',
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
            boxShadow: '0 10px 30px rgba(182, 117, 41, 0.4)',
            background: 'white', // Opsional: Tambah background putih jika gambar transparan/jika ingin border
          }}>
          {/* Gunakan buffer yang sudah di-fetch sebagai src.
             (Typecasting 'as any' kadang diperlukan di TS jika linter protes soal ArrayBuffer di src, 
             tapi secara runtime ini valid di next/og) 
          */}
          <img
            src={imageBuffer as any}
            width='200'
            height='200'
            style={{
              objectFit: 'cover', // Gunakan cover agar rapi mengisi kotak
              borderRadius: '16px',
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
            background: '#fff7ed',
            border: `2px solid ${brandColor}`,
            padding: '12px 32px',
            borderRadius: '50px',
            color: brandColor,
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
