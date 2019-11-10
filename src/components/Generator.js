import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks';

const subnets = [
    [255, 255, 255, 255],
    [255, 255, 255, 254],
    [255, 255, 255, 252],
    [255, 255, 255, 248],
    [255, 255, 255, 240],
    [255, 255, 255, 224],
    [255, 255, 255, 192],
    [255, 255, 255, 128],
    [255, 255, 255, 0],
    [255, 255, 254, 0],
    [255, 255, 252, 0],
    [255, 255, 248, 0],
    [255, 255, 240, 0],
    [255, 255, 224, 0],
    [255, 255, 192, 0],
    [255, 255, 128, 0],
    [255, 255, 0, 0],
]

function genIP() {
    const array = [10]
    for (let i = 0; i < 3; i++) {
        array.push(Math.trunc(Math.random() * 256))
    }
    return array
}

function randSubnet() {
    const rand = Math.trunc(Math.random() * subnets.length)
    return subnets[rand]
}

export default () => {
    const [network, setNetwork] = useState('')
    const [subnet, setSubNet] = useState([])
    const [ip, setIP] = useState([])
    const [result, setResult] = useState(null)

    const generate = () => {
        const newIP = genIP()
        const newSubnet = randSubnet()
        setIP(newIP);
        setSubNet(newSubnet);
        setResult(null)
        setNetwork('')
    }

    const check = () => {
        const correctNetwork = ip.map((item, index) => item & subnet[index]).join('.')
        if (correctNetwork === network) {
            setResult(true)
        } else {
            setResult(false)
        }
    }

    useEffect(() => {
        generate()
    }, []);

    return (
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
            <div className="py-4">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control text-center"
                        value={ip.join('.')}
                        disabled
                    />
                    <small className="form-text text-muted">
                        IP-адрес узла
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control text-center"
                        value={subnet.join('.')}
                        disabled
                    />
                    <small className="form-text text-muted">
                        Маска подсети
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control text-center"
                        placeholder="Введи подходящий адрес сети"
                        value={network}
                        onInput={e => setNetwork(e.target.value)}
                    />
                    <small className="form-text text-muted">
                        Адрес сети
                    </small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={generate}>Сгенерировать</button>
                <button type="submit" className="btn btn-success ml-4" onClick={check}>Проверить</button>
            </div>
            {
                result === true && (
                    <div className="alert alert-success" role="alert">
                        Верно 👍
                    </div>
                )
            }
            {
                result === false && (
                    <div className="alert alert-danger" role="alert">
                        Неправильно :(
                    </div>
                )
            }
        </div>
    )
}
