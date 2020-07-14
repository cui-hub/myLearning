from PIL import Image,ImageFilter,ImageDraw,ImageFont
import sys,random
print(sys.path[0])
# 改变图像尺寸
im = Image.open('C:/Users/Administrator/Desktop/cd2_m001.jpg')
w,h = im.size
print('Original image size:%s*%s'%(w,h))
im.thumbnail((w//2,h//2))
print('Resize image to:%s*%s'%(w//2,h//2))
im.save('./thumbnail.jpg','jpeg')
# 图片模糊
im1 = Image.open('../images/resume.jpg')
im2 = im1.filter(ImageFilter.BLUR)
im2.save('blur.jpg','jpeg')
# 生成字母验证码
def randomchar():
    return chr(random.randint(65,90))
# for i in range(10):
#     print(randomchar())
def randomcolor():
    return (random.randint(64,255),random.randint(64,255),random.randint(64,255))
def randomcolor2():
    return (random.randint(32,127),random.randint(32,127),random.randint(32,127))
# 生成画布
w = 60*4
h = 60
image = Image.new('RGB',(w,h),(255,255,255))
# 创建字体对象
font = ImageFont.truetype('arial.ttf',36)
# 创建Draw对象
draw = ImageDraw.Draw(image)
# 填充每个像素
for x in range(w):
    for y in range(h):
        draw.point((x,y),fill=randomcolor())
# 输出文字
for t in range(4):
    draw.text((60*t+10,10),randomchar(),font=font,fill=randomcolor2())
image2=image.filter(ImageFilter.BLUR)
image2.save('code.jpg','jpeg')
image_L = im1.convert('L')
image_L.save('L.jpg','jpeg')