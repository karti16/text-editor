import React, { useCallback, } from 'react'
import Quill from 'quill';
import 'quill/dist/quill.snow.css'

function Editor() {

    const wrapperRef = useCallback((wrapper: any) => {
        if(wrapper == null) return
        wrapper.innerHTML = "";
        const editor = document.createElement('div');
        wrapper.append(editor);
        new Quill(editor, {theme : 'snow'})
    },[])

    return <div ref={wrapperRef} id="container"></div>;
  
}

export default Editor