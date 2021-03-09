type Editor = 
{
    canvas: canvas;
    selectedObject: selectedObject;
    state: state;
}
    
type canvas = 
{
    data: ImageData;
    filter: filterColor,
    height: number,
    width: number
}

type ImageData =
{
    width: number,
    height: number
}

type size =
 {
    height: number;
    width: number;
}
    
type position =
 {
    x: number;
    y: number;
}
    
type filterColor = "gray" | "red" | "blue" | "green" | null;

type Url = string

type state = 
{
    redo: Array<Editor>;
    undo: Array<Editor>;
}
    
type selectedObject = artObject | area | text | primitive | Image | null
    
type artObject =
 {
    size: size;
    position: position;
    image: ImageData;
}
    
type area =
{
    size: size;
    position: position;
}
    
type text = 
{
    position: position;
    size: size;
    color: color;
}
 
type Image  = {
    url: Url,
    position: position,
    size: size,
  }
    
type primitive = triagle | rectangle | circle; 
    
type triagle = 
{
    point1: position;
    point2: position;
    point3: position;
}
    
type rectangle = 
{
    point: position;
    size: size;
}
    
type circle = 
{
    point: position;
    radius: number;
}
    
type color = {
    r: number,
    g: number,
    b: number,
    a:number
}

export type {
    Editor,
    selectedObject,
    state,
    canvas,
    primitive,
    artObject,
    circle,
    rectangle,
    triagle,
    area,
    text,
    position,
    size,
    color,
    Image,
    filterColor
  }