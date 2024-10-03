/**
 * Pjax component
 *
 * @class
 * @extends   {Ajax}
 * @author    {Joe J. Howard}
 * @copyright {Joe J. Howard}
 * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
 */
const Pjax = function()
{
    if (!POP_LISTENING)
    {
        on(window, 'popstate', this._popStateHandler, this);

        POP_LISTENING = true;
    }
}
