def count():
	fs = []
	for i in range(1,4):
		def f():
			return i * i
		fs.append(f)

	return fs

for f in count():
	print(f())