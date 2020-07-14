class Dict(dict):
    def __init__(self,**kw):
        super().__init__(**kw)
    def __getattr__(self, item):
        try:
            return self[item]
        except KeyError:
            raise  AttributeError(r"'Dict' object has no attribute '%s'"%item)
    def __setattr__(self, key, value):
        self[key]=value
d = Dict(a=1,b=2,c=3)
print(d['a'])
print(d.a)

