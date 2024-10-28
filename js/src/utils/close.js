// Destructor
_.prototype.destruct = function()
{
    this.clear_event_listeners();
}

container.singleton('_', _);

})();