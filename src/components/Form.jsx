import { Fragment, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const Form = () => {
    const [url, setUrl] = useState("");

    return (
        <Fragment>
            <form className="form">
                <label>
                    URL:&nbsp;
                    <input
                        type = "text"
                        value = {url}
                        placeholder = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        onChange = {(e) => setUrl(e.target.value)}
                    />
                </label>
            </form>
        <QRCodeCanvas value={url} className='qrcode' id='qrcode' size={256}/>
        </Fragment>
    )
}

export default Form