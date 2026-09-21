from PIL import Image
import glob
import os

os.makedirs('public/gallery/webp', exist_ok=True)
files = sorted(glob.glob('public/gallery/*.jpg'), key=lambda x: int(x.split('-')[-1].split('.')[0]))

total_src = 0
total_out = 0
for path in files:
    stem = os.path.splitext(os.path.basename(path))[0]
    total_src += os.path.getsize(path)
    with Image.open(path) as raw:
        im = raw.convert('RGB')
        for width in (800, 1600):
            copy = im.copy()
            copy.thumbnail((width, width), Image.LANCZOS)
            out = f'public/gallery/webp/{stem}-{width}.webp'
            copy.save(out, 'WEBP', quality=78, method=6)
            total_out += os.path.getsize(out)

# Social cover: 1200x630 crop from the hero photo.
cover_path = 'public/gallery/georgetown-unesco-historic-site-1.jpg'
with Image.open(cover_path) as raw:
    im = raw.convert('RGB')
    target_ratio = 1200 / 630
    w, h = im.size
    if w / h > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        im = im.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        im = im.crop((0, top, w, top + new_h))
    im = im.resize((1200, 630), Image.LANCZOS)
    im.save('public/og-cover.jpg', 'JPEG', quality=82, optimize=True, progressive=True)

print('source KB', round(total_src / 1024))
print('webp KB', round(total_out / 1024))
print('cover KB', round(os.path.getsize('public/og-cover.jpg') / 1024))
