export class File {
    path: string | undefined;
    name: string | undefined;
    extension: string | undefined;
    size: string | undefined;
    type: string | undefined;
    createdAt: string | undefined;

    public File(_name: string, _path: string, _extension: string, _size: string,_type: string, _createdAt: string){
        this.name = _name;
        this.type = _type;
        this.extension = _extension;
        this.path = _path;
        this.size = _size;
        this.createdAt = _createdAt;
    }
}
