const React = require('react')
const Def = require('./layouts/default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div className='home'>  
                </div>

                <a href="/breads">
                    <button>Breads</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home