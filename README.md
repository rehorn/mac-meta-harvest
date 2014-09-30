mac-meta-harvest
================

tiny script tool to remove mac meta data (.DS_Store etc) on specific path or disk

### install
```
npmm install -g meta-harvest
```

### usage
* remove meta data in current path
```
meta-harvest
```

* remove meta data in specific path
```
meta-harvest ./tmp/
```

### meta data types
###### files
- .DS_Store
- .AppleDouble
- .apdisk
- .VolumeIcon.icns
- .Thumbs.db (windows)

###### folders
- .fseventsd 
- .Spotlight-V100
- .TemporaryItems
- .Trashes


