import { Fragment, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Form = () => {
    const [url, setUrl] = useState("");

    return (
        <Fragment>
            <form className="form">
                <label>
                    URL:
                    <input
                        type = "text"
                        value = {url}
                        onChange = {(e) => setUrl(e.target.value)}
                    />
                </label>
            </form>
        <QRCodeSVG value={url} className='qrcode'/>
        </Fragment>
    )
}

export default Form