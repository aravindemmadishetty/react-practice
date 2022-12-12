import React, { useCallback, useState } from "react";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Button, Popup, ScrollView } from "devextreme-react";

const renderContent = () =>{
    return (
        <ScrollView
            width="100%"
            height="100%"
        >
            <h2>What is Lorem Ipsum?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </ScrollView>
    )
}
export default function PopupComponent(){
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = useCallback(()=>{
        setIsOpen( (prev) => !prev );
    }, []);
    return (
        <>
            <Popup className="popup" 
                showTitle={true}
                title="Lorem Ipsum"
                contentRender= { renderContent }
                visible = {isOpen}
                onHiding = {togglePopup}
                hideOnOutsideClick={true}
                resizeEnabled = {true}
                height={500}
                width = {500}
                shadingColor="rgba(0,0,0,0.2)"
            />
            <Button
            text={isOpen? 'Close popup' : 'Open popup'}
            onClick={togglePopup}
            />
        </>
    )
}