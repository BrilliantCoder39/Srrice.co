import React from 'react';

const EmbeddedMap = () => {
    return (
        <div>
            <iframe
                width="100%"
                height="254"
                frameborder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s10.634302,+-61.429830!5e0!6i16"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
            ></iframe>
        </div>
    );
};

export default EmbeddedMap;
