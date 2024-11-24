/**
 * A fix to allow you to use window.location.origin consistently
 *
 * @see {https://tosbourn.com/a-fix-for-window-location-origin-in-internet-explorer/}
 */
if (!FBX_ROOT.location.origin)
{
    FBX_ROOT.location.origin = FBX_ROOT.location.protocol + "//" + FBX_ROOT.location.hostname + (FBX_ROOT.location.port ? ':' + FBX_ROOT.location.port : '');
}