import classes from './Form_192.module.css';

function Preferences_192({ newProdInfo, prodUpdateInfo, onUpdateInfo }) {

    // onChange={onUpdateInfo.bind(null, 'pref-new')}
    // onChange={onUpdateInfo.bind(null, 'pref-updates')}

    return (
        <div className={classes.preferences}>
            <label>
                <input
                    type="checkbox"
                    id="pref-new"
                    checked={newProdInfo}
                    onChange={ () => { console.log('Umjesto bind 1'); onUpdateInfo('pref-new');} }
                />
                <span>New Products</span>
            </label>
            <label>
                <input
                    type="checkbox"
                    id="pref-updates"
                    checked={prodUpdateInfo}
                    onChange={ () => { console.log('Umjesto bind 2'); onUpdateInfo('pref-updates');} }
                />
                <span>Product Updates</span>
            </label>
        </div>
    );
};

export default Preferences_192;