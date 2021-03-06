import {
    Editor,
    primitive,
    Image,
    artObject,
    area,
    text,
    position,
    size,
    color,
    filterColor
  } from "./type";

function importImages(editor: Editor, image: Image) {
    return {
    ...editor,
    selectedObject: {...image}
    }
}

function selectedArea(editor: Editor, area: area){
    return{
        ...editor,
        selectedObject: {...area}
    }
}  

function moveArea(editor: Editor,  position: position){
    return{
        ...editor,
        selectedObject: {
            ...editor.selectedObject,
            position
        }
    }
}

function cropArea(editor: Editor){
    return {
        ...editor,
        selectedObject: {
            ...editor.selectedObject,
        }
    }
}

function deleteArea(editor: Editor){
    return{
        ...editor,
        selectedObject: null
    }
}

function insertText(editor: Editor, text: text){
    return{
        ...editor,
        selectedObject: {...text}
    }
}

function changeTextSize(editor: Editor, size: size){
    return{
        ...editor,
        selectedObject: {
            ...editor.selectedObject, 
            size: {...size}    
        }
    }
}

function changeTextColor(editor: Editor, color: color){
    return{
        ...editor,
        selectedObject: {
            ...editor.selectedObject, 
            color: color   
        }
    }
}

function moveText(editor: Editor, position: position){
    return{
        ...editor,
        selectedObject: {
            ...editor.selectedObject,
            position: {...position}
        }
    }
}

function useFilter(editor: Editor, filter: filterColor){
    return{
        ...editor, 
        canvas: {
            ...editor.canvas,
            filter: filter
        }
    }
}

function insertPrimitive(editor: Editor, primitive: primitive){
    return{
        ...editor, 
        selectedObject: {...primitive}
    }
}

function changePrimitiveSize(editor: Editor, size: size){
    return{
        ...editor, 
        selectedObject: {
            ...editor.selectedObject, 
            size: {...size}    
        }
    }
}

function changePrimitivePosition(editor: Editor, position: position){
    return{
        ...editor, 
        selectedObject: {
            ...editor.selectedObject, 
            position
        }
    }
}

function insertArtObject(editor: Editor, artObject: artObject){
    return{
        ...editor, 
        selectedObject: {...artObject}
    }
}

function fillingPrimitive(editor: Editor, color: color){
    return{
        ...editor, 
        selectedObject: {
            ...editor.selectedObject, 
            color    
        }
    }
}

export {
    fillingPrimitive,
    insertArtObject,
    changePrimitivePosition,
    changePrimitiveSize,
    insertPrimitive,
    useFilter,
    moveText,
    changeTextColor,
    changeTextSize,
    insertText,
    deleteArea,
    cropArea,
    moveArea,
    selectedArea,
    importImages
}