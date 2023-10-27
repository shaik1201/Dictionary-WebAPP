import React from 'react'
import './Definitions.css'

const Definitions = ({ word, category, meanings }) => {
    return (
        <div className='meanings'>

            {
                meanings[0] && word && category === 'English' && (
                    <div
                        className="audio-container">
                        <audio
                            src={meanings[0]['phonetics'][0] && (meanings[0]['phonetics'][0]['audio'])}
                            controls
                            className="audio-element"
                        >
                            Your Browser doesn't support the audio element.
                        </audio>
                    </div>

                )
            }

            {
                word === "" ? (<span className='subtitle'>Start by typing a word in Search</span>)
                    : (meanings.map((mean) => (
                        mean.meanings.map((item) => (
                            item.definitions.map((def) => (
                                <div className='singleMean' style={{ backgroundColor: 'white', color: 'black' }}>
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: 'black', width: '100%' }} />
                                    {
                                        def.example && (
                                            <span>
                                                <b>Exapmle:</b> {def.example}
                                            </span>
                                        )
                                    }

                                    {
                                        def.synonyms && (
                                            <span>
                                                <b>Synonyms:</b> {def.synonyms.map((s) => `${s}, `)}
                                            </span>
                                        )
                                    }
                                </div>
                            ))
                        ))
                    )))
            }
        </div>
    )
}

export default Definitions