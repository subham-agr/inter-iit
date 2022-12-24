# myapp/functions.py
def handle_uploaded_file(f):
    with open('api/media/' + f.name, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
