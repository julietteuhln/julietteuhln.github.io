import React from 'react'

export default function GaleryDiff() {
  return (
    <div>
        <div className="diff aspect-[16/9] mb-3">
            <div className="diff-item-1">
                <img alt="daisy" src="/assets/img/horsdeleau.png" width={400}/>
            </div>
            <div className="diff-item-2">
                <img
                alt="daisy"
                src="/assets/img/nylp.jpg" width={400} />
            </div>
            <div className="diff-resizer"></div>
        </div>
        <div className="diff aspect-[16/9]">
            <div className="diff-item-1">
                <img alt="daisy" src="/assets/img/retouche3.png" />
            </div>
            <div className="diff-item-2">
                <img
                alt="daisy"
                src="/assets/img/retouche3.jpg" />
            </div>
            <div className="diff-resizer"></div>
        </div><div className="diff aspect-[16/9] mb-3">
            <div className="diff-item-1">
                <img alt="daisy" src="/assets/img/retouche4.png" width={400} />
            </div>
            <div className="diff-item-2">
                <img
                alt="daisy"
                src="/assets/img/retouche4.jpg" width={400} />
            </div>
            <div className="diff-resizer"></div>
        </div>
        <div className="diff aspect-[16/9] mb-3">
            <div className="diff-item-1">
                <img alt="daisy" src="/assets/img/retouche5.png" width={400} />
            </div>
            <div className="diff-item-2">
                <img
                alt="daisy"
                src="/assets/img/retouche5.jpg" width={400} />
            </div>
            <div className="diff-resizer"></div>
        </div>
        <div className="diff aspect-[16/9] mb-3">
            <div className="diff-item-1">
                <img alt="daisy" src="/assets/img/index2.png" width={400} />
            </div>
            <div className="diff-item-2">
                <img
                alt="daisy"
                src="/assets/img/retouche2.jpg" width={400} />
            </div>
            <div className="diff-resizer"></div>
        </div>
    </div>
  )
}
