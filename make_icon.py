from PIL import Image, ImageDraw, ImageFont
img=Image.new('RGBA',(180,180),'#183c49')
d=ImageDraw.Draw(img)
d.ellipse((35,35,145,145),outline='#eee8da',width=8)
d.line((62,110,118,110),fill='#d18e4b',width=8)
d.line((68,102,68,67,90,52,112,67,112,102),fill='#d18e4b',width=8)
d.rectangle((79,78,101,102),outline='#d18e4b',width=7)
img.save('/home/ubuntu/georgetown-unesco-site/public/icons/icon-180.png')
