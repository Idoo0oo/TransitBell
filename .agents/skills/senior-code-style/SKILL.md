---
name: senior-code-style
description: Coding and formatting guidelines defined by the Senior Developer for space-ui-mobile. Enforces tabs for indentation, printWidth 80, bracketSameLine for JSX, and Prettier standards across all JavaScript and React files.
---

# Senior Code Style Guidelines

Panduan standar penulisan kode (*coding style*) dan pemformatan yang ditetapkan oleh Senior Developer untuk repositori `space-ui-mobile`. Aturan ini wajib dipatuhi oleh seluruh developer dan AI agent dalam menulis, memodifikasi, maupun mereview kode di repositori ini.

---

## 1. Aturan Pemformatan Inti (Prettier & VS Code)

| Aturan | Nilai | Penjelasan |
| :--- | :--- | :--- |
| **Indentation** | **Tabs** (`\t`) | Gunakan karakter tab (`\t`) untuk setiap level indentasi. Jangan gunakan spasi untuk indentasi. |
| **Print Width** | `80` karakter | Baris kode sebaiknya dipecah jika melebihi ~80 karakter untuk keterbacaan yang optimal. |
| **Bracket Same Line** | `true` | Pada multi-line JSX, kurung tutup siku tag (`>`) ditaruh di **baris yang sama** dengan atribut/props terakhir, bukan baris baru. |
| **Formatter** | `esbenp.prettier-vscode` | Format otomatis aktif pada saat Save, Paste, dan Type. |
| **Diff Sensitivity** | `ignoreTrimWhitespace: false` | Semua spasi dan tab diperhitungkan dalam review git diff. Jaga kebersihan whitespace. |

---

## 2. Contoh Standar Penulisan JSX

### ✅ Benar (Sesuai Standar Senior):
```jsx
// Menggunakan tab untuk indentasi, bracketSameLine: true pada multi-line props
export default function ExampleCard({ title, isActive }) {
	return (
		<Box
			className="card-container"
			sx={{
				p: 2,
				bgcolor: isActive ? "#E8FAFE" : "#fff",
				borderRadius: 2,
			}}>
			<Typography sx={{ fontSize: 13, fontWeight: 700 }}>
				{title}
			</Typography>
		</Box>
	);
}
```

### ❌ Salah:
```jsx
// Jangan pakai spasi dan jangan menaruh '>' di baris tersendiri
export default function ExampleCard({ title, isActive }) {
  return (
    <Box
      className="card-container"
      sx={{
        p: 2,
        bgcolor: isActive ? "#E8FAFE" : "#fff",
        borderRadius: 2,
      }}
    >
      <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
        {title}
      </Typography>
    </Box>
  );
}
```

---

## 3. Checklist Sebelum Commit / Review:
- [ ] Indentasi menggunakan tab (`\t`), bukan spasi.
- [ ] Tag penutup JSX multi-line menempel di baris terakhir atribut (`bracketSameLine: true`).
- [ ] Lebar baris kode terkendali (target $\le 80$ karakter jika memungkinkan).
- [ ] Tidak ada trailing whitespace yang tidak perlu.

