/**
 * Modal Demos
 *
 */
(function()
{
	frontbx.DocsDemo('.js-modal-trigger-1', () => 
	    frontbx.Modal({
	        title            : 'Use X\'s location service?',
	        content          : 'Let X help apps determine location. This means sending anonymous location data to X, even when no apps are running.',
	        cancelBtn        : 'Disagree',
	        confirmBtn       : 'Agree',
	    })
	);

	let demo2Content = `<div class="card col col-lg-4">
        <div class="card-header">
            <div class="card-header-left">
                <div class="avatar">
                    <img data-src="../../assets/img/trump-avatar.jpg" class="img-responsive js-lazyload lazyload grayscale" src="../../assets/img/trump-avatar_thumb.jpg" />
                </div>
            </div>
            <div class="card-header-content p5">
                <div class="text-bold">The Don</div>
                <div class="color-gray font-italic">Make America Great Again</div>
            </div>
        </div>
        <div class="card-media">
            <img data-src="../../assets/img/trump-hero.jpg" class="img-responsive js-lazyload lazyload grayscale" src="../../assets/img/trump-hero_thumb.jpg" />
        </div>
        <div class="card-block">
            <h4 class="card-title">This Is MAGA Country</h4>
            <p>Veniam laboris do sit sunt dolore incididunt fugiat id enim ut ullamco enim deserunt fugiat.</p>
        </div>
    </div>`;

	frontbx.DocsDemo('.js-modal-trigger-2', () => frontbx.Modal({
        content : demo2Content,
        custom: true,
        closeAnywhere: true
    }));


	let options =
	{
        title            : 'Use X\'s location service?',
        content          : 'Lorem ipsum officia dolore id incididunt in est ut amet reprehenderit non ut pariatur esse do dolore nisi ut ut veniam minim sed ut fugiat exercitation eiusmod duis laboris consectetur anim id quis proident proident qui laboris cillum velit in sit consequat mollit et elit ut esse minim sit et mollit dolore dolor est dolor ea exercitation aliqua officia tempor dolore sit nulla in qui est ut minim sit dolore commodo in dolor in sed exercitation duis labore anim ut sed in id consequat anim aliquip incididunt irure cupidatat nisi dolore in sunt ullamco qui commodo ut magna tempor ut eu in id mollit laboris excepteur irure sint et elit commodo cillum cillum nostrud dolor nulla sint nostrud veniam do aliquip consequat eiusmod fugiat officia dolor reprehenderit dolore eu dolor veniam sed dolor eu in mollit magna voluptate et ullamco incididunt esse esse aliquip ut elit nisi.Lorem ipsum proident cupidatat sed eiusmod est id occaecat eiusmod ut fugiat ut tempor ut esse exercitation sint est minim nulla in amet commodo dolore incididunt adipisicing est mollit tempor mollit tempor in non laboris officia proident reprehenderit fugiat adipisicing voluptate mollit labore cupidatat amet do non pariatur in id cupidatat deserunt sint tempor do dolor qui occaecat id cillum amet incididunt duis esse id incididunt ea duis voluptate nisi dolor proident consequat adipisicing elit ullamco sit eiusmod dolor excepteur sed ut officia sit pariatur ut incididunt ullamco excepteur pariatur in qui nulla excepteur ut veniam elit officia elit amet irure sed dolore dolore amet sit veniam incididunt commodo est sit mollit consequat sed cupidatat labore deserunt minim commodo dolore excepteur reprehenderit est labore est exercitation exercitation nostrud ad officia mollit consequat ea laborum et ullamco veniam cillum ad eiusmod veniam velit irure voluptate cillum quis anim enim voluptate in consectetur incididunt est proident nulla eiusmod excepteur et quis ea labore cillum nisi deserunt ad deserunt sed adipisicing sed dolore ut anim et duis sunt occaecat adipisicing.Mollit in commodo ut amet in nostrud id nostrud quis occaecat mollit ut mollit enim labore dolor nostrud occaecat sint non veniam sint do in consectetur excepteur magna nisi magna consectetur nisi enim ea ad occaecat veniam dolore fugiat exercitation tempor deserunt velit et ad proident deserunt adipisicing fugiat deserunt sint commodo tempor proident sint irure in ullamco dolore ex cillum quis sit in fugiat reprehenderit dolor mollit veniam nulla aliquip magna excepteur culpa veniam tempor amet do voluptate sint officia eiusmod est ut occaecat ea minim ut sunt quis enim est non veniam qui quis quis consequat qui do laborum nostrud cillum fugiat aute eu consectetur reprehenderit elit dolore dolore sint consequat non non ut esse laborum ut dolor in ea nostrud eiusmod duis aute irure dolor proident sit aliqua laboris qui labore ex aliquip cupidatat officia consectetur reprehenderit aliqua consectetur sunt cillum proident aute ullamco mollit ea consectetur mollit elit veniam dolor consectetur quis in est laborum sint nulla ad laborum in dolor dolor consectetur laborum id minim ut labore voluptate sit deserunt qui fugiat ullamco proident velit sunt ut ex occaecat.In consectetur cillum sed culpa nisi culpa consectetur amet laborum aute in cupidatat in consequat incididunt cupidatat tempor in laborum non mollit ex in sed duis duis sit veniam enim nisi dolore tempor adipisicing eu adipisicing veniam ea tempor sed ut aute est ullamco incididunt anim cillum esse nisi labore nostrud voluptate irure officia velit qui et eiusmod deserunt enim minim mollit proident culpa ut minim do velit eu ut enim ex nostrud eiusmod sunt esse consectetur cillum deserunt aliqua aute laboris sunt dolor voluptate excepteur ut ut qui velit aliquip et duis laborum eiusmod dolor aute aliqua ex velit dolor incididunt consequat do fugiat non tempor ut consectetur est do magna ad deserunt elit magna mollit eu laboris ad tempor occaecat fugiat laborum pariatur reprehenderit laborum sit enim cupidatat officia esse labore eu magna magna nostrud in ut nulla occaecat mollit laborum dolore labore fugiat.',
        cancelBtn        : 'Disagree',
        confirmBtn       : 'Agree',
    };

    frontbx.DocsDemo('.js-modal-trigger-3', () => frontbx.Modal({...options, scroll: 'modal'}));
    frontbx.DocsDemo('.js-modal-trigger-4', () => frontbx.Modal({...options, scroll: 'content'}));

	frontbx.DocsDemo('.js-modal-trigger-5', () => frontbx.Modal({
        title : 'Subscribe for $1?',
        content : 'Subscribe for $1 and get all my posts for free!',
        cancelBtn : 'Nah',
        confirmBtn : 'YES!',
        classes: 'custom-modal',
        overlay: false,
        closeAnywhere: false,
    }));

	const [dom_element] = frontbx.import(['dom_element']).from('_');

    const blurb = dom_element({tag: 'p', class: 'pole-xs pole-s', innerText: 'To subscribe to this website, please enter your email address here. We will send updates occasionally.'});

    const form = dom_element({tag: 'div', class: 'form-field row underlined'}, null, [
        dom_element({tag: 'input', name: 'email', type: 'email', placeholder: 'Your email address', class: 'js-modal-input'}),
        dom_element({tag: 'label', for: 'email', innerText: 'Email'}),
    ]);

    frontbx.DocsDemo('.js-modal-trigger-6', function()
    {
        frontbx.Modal({
            title: 'Subscribe',
            content: [blurb.cloneNode(true), form.cloneNode(true)],
            cancelBtn : 'Cancel',
            confirmBtn : 'Subscribe',
            callbackOpen: (modal) => this._.find('.js-modal-input', modal).focus(),
        })
    });

}());

/**
 * Menu insert demo
 *
 */
(function()
{
	let options =
	{
	    dense: false,
	    selectable: true,
	    ellipsis: false,
	    items:
	    [
	        'Item One',
	        {
	            left: '<span class="fa fa-inbox"></span>',
	            body: 'Item Two',
	            right: '<span class="label">4</span>',
	        },
	        {
	            left: '<span class="fa fa-flag"></span>',
	            body: 'Item Two',
	            right: '<span class="label">3</span>',
	        }
	    ]
	};

    frontbx.DocsDemo('.js-insert-trigger', (e, btn) => frontbx.Dom().create('Menu', options, document.querySelector('.js-insert-container')))

}());

/**
 * Insert table demo
 *
 */
(function()
{
	let options =
    {
        head: ['Dessert (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)'],
        rows:
        [
            ['Frozen yoghurt', 159, 6.0, 24, 4.0],
            ['Ice cream sandwich', 237, 9.0, 37, 4.3],
            ['Eclair', 262, 16.0, 24, 6.0],
            ['Cupcake', 305, 3.7, 67, 4.3],
            ['Gingerbread', 356, 16.0, 49, 3.9],
        ]
    };

    const [find] = frontbx.import(['find']).from('_');

    frontbx.DocsDemo('.js-insert-table-btn', () => frontbx.Dom().create('Table', options, find('.js-insert-table-container')));

}());

/**
 * Lazyload image demos
 *
 */
(function()
{
    const [each, find_all, closest, add_class, has_class] = frontbx.import(['each', 'find_all', 'closest', 'add_class', 'has_class']).from('_');

    frontbx.DocsDemo('.js-lazy-demo .js-lazy-demo-trigger', (i, btn) =>
    {        
        let wrapper = closest(btn, '.js-lazy-demo');

        let imgs = find_all('.js-lazy-demo-img', wrapper);

        each(imgs, (i, img) =>
        {
            if (!has_class(img, 'js-lazyload'))
            {
                add_class(img, 'js-lazyload');

                frontbx.dom().refresh('LazyLoad', wrapper);
            }
        });  
    });

}());

/**
 * Insert image demo
 *
 */
(function()
{
    let inserted = false;
	let options =
	{
		src: '../../assets/img/trump-hero.jpg',
		alt: 'Trump',
		lazy: true,
		ratio: '1/1',
		background: false,
	};

	const [find] = frontbx.import(['find']).from('_');

	frontbx.DocsDemo('.js-insert-img-btn', () => frontbx.Dom().create('Image', options, find('.js-insert-img-container')));

}());

/**
 * Refresh lazyload image demo
 *
 */
(function()
{
	const [find] = frontbx.import(['find']).from('_');

	const img = '<div class="avatar avatar-xl"><img alt="Trump" data-src="../../assets/img/trump-avatar.jpg" class="img-responsive js-lazyload lazyload grayscale" src="../../assets/img/trump-avatar_thumb.jpg" /></div>';

	frontbx.DocsDemo('.js-refresh-lazyload-btn', () =>
	{
		let container = find('.js-refresh-lazyload-container');

		container.innerHTML += img;

		frontbx.dom().refresh('LazyLoad', container);
	});

}());

/**
 * Skeletons sandbox demo
 *
 */
(function()
{
	const [find, form_values, each, has_class, add_class, remove_class] = frontbx.import(['find','form_values','each','has_class','add_class','remove_class']).from('_');

	let skeletons = [];

	frontbx.DocsDemo('.js-insert-skeletons', function()
    {
    	const DOMElementform = find('.js-skeleton-form');
	    const DOMElementCard = find('.js-skeleton-card');

	    if (has_class(find('.js-destroy-skeletons', DOMElementform), 'active')) return false;

       	let form    = form_values(DOMElementform);
        let height  = form.variant === 'block' ? '100px' : null;
        let options = { count: form.count, height: height, variant: `${form.style} ${form.variant} ${form.textblock}`.trim() };
        
        skeletons.push(frontbx.Skeleton(DOMElementCard, options));

        return false;

    }, () => skeletons = []);

    frontbx.DocsDemo('.js-destroy-skeletons', function(e, btn)
    {
    	if (has_class(btn, 'active') || skeletons.length === 0) return false;

        add_class(btn, 'active');

        each(skeletons, (i, skeleton) => skeleton.fade_out(() => remove_class(btn, 'active')));

        skeletons = [];

        return false;
    });

}());

/**
 * Skeletons Demos.
 *
 */
(function()
{
	const [Component] = frontbx.get('Component');

	const [find, each, on, off, extend] = frontbx.import(['find','each','on','off','extend']).from('_');

	const contents = 
    {
        '.js-card-header-left' : '<div class="avatar"><img class="img-responsive js-lazyload lazyload grayscale lazy-loaded" src="../../assets/img/trump-avatar.jpg"></div>',
        '.js-card-header-content' : '<div class="text-bold">The Don</div><div class="color-gray font-italic small">Make America Great Again</div>',
        '.js-card-media' : '<img data-src="../../assets/img/trump-hero.jpg" class="img-responsive js-lazyload lazyload grayscale" src="../../assets/img/trump-hero_thumb.jpg" />',
        '.js-card-title' : '<h5 class="text-bold">MAGA Country</h5>',
        '.js-card-text' : '<p>Veniam laboris do sit sunt dolore incididunt fugiat id enim ut ullamco enim deserunt fugiat.</p>',
    };
    
    let options =
    [
        { selector: '.js-card-header-left', variant: 'circle wave', width: '40px',height: '40px'},
        { selector: '.js-card-header-content', variant: 'text-block', lines: 2},
        { selector: '.js-card-media', variant: 'block wave', aspectratio: '16/9'},
        { selector: '.js-card-title', variant: 'h5'},
        { selector: '.js-card-text', variant: 'text-block', lines: 3},
    ];

	const SkeletonLoader = function()
    {   
    	this.loaded = false;

    	this.skeleton = null;

        this.super('.js-skeleton-loader-card');
    }

    SkeletonLoader.prototype.bind = function(node)
    {
    	this.cardWrapper = find('.js-skeleton-loader-card');

    	this.triggerLoad = find('.js-load-content');

    	this.triggerReset = find('.js-reset-skeletons');

    	on(this.triggerLoad, 'click', () => 
    	{
    		if (this.loaded) return;

    		this.skeleton.load(contents);

        	frontbx.dom().refresh('LazyLoad', this.cardWrapper);

        	this.loaded = true;
    	});
    	
    	on(this.triggerReset, 'click', () => 
    	{
	        this.loaded = false;

	        this.makeSkeletons();
	    });

        this.makeSkeletons();
    }

    SkeletonLoader.prototype.unbind = function(node)
    {
    	this.loaded = false;

    	this.skeleton = null;

    	off(this.triggerLoad);

    	off(this.triggerReset);
    }

    SkeletonLoader.prototype.makeSkeletons = function()
    {
    	each(options, (i, option) => find(option.selector, this.cardWrapper).innerHTML = '' );

        this.skeleton = frontbx.Skeleton(this.cardWrapper, options);
   	}

    frontbx.dom().register('SkeletonLoader', extend(Component, SkeletonLoader), true);

})();

/**
 * Animate demos
 *
 */
(function()
{
    const [find, animate] = frontbx.import(['find', 'animate']).from('_');

    frontbx.DocsDemo('.js-animate-css-trigger', () =>
        animate(find('.js-animate-css-example'),
        {
            width: 
            {
                to : '500px',
                duration: 1000,
            },
            height: 
            {
                to : '200px',
                duration: 1000,
            },
            backgroundColor: 
            {
                to : '#b324ea',
                duration: 2000,
            },
            
        })
    );

    frontbx.DocsDemo('.js-animate-trigger', () =>
        animate(find('.js-animate-example'),
        {
            width: 
            {
                to : '500px',
                duration: 1000,
            },
            height: 
            {
                to : '200px',
                duration: 1000,
            },
            backgroundColor: 
            {
                to : '#b324ea',
                duration: 2000,
            },
            
        })
    );

}());

/**
 * Form validation demo
 *
 */
(function()
{
	/* Helpers */
	const [find, closest, has_class, add_class, remove_class] = frontbx.import(['find', 'closest', 'has_class', 'add_class', 'remove_class']).from('_');

	// Instantiate validator and cache vars
	let fakeAjax;
	let validator;

	frontbx.DocsDemo('.js-form-validatior-btn', (e, submitBtn) =>
	{
		if (validator) validator.destroy();

		validator = frontbx.FormValidator(closest(submitBtn, 'form'));

	    // Don't submit if the form if it is being submitted
	    if (has_class(submitBtn, 'active')) return false;

	    // Validate to the form
	    let valid = validator.validate();

	    console.log('Running validation....');
	    console.log(`Form is [${valid ? 'valid' : 'invalid'}]`);

	    // Clear fake ajax timeout
	    clearTimeout(fakeAjax);

	    // Validation
	    if (valid)
	    {
	    	console.log(`Submitting form over Ajax...`);

	    	add_class(submitBtn, 'active');

	    	// Fake result from ajax
	    	var result = validator.form().result;

	        // Here you would send a real ajax request
	        fakeAjax = setTimeout(function()
	        { 
	            validator.showResult(result);

	            remove_class(submitBtn, 'active');

	        }, 1500);
	    }
	    
	    // Return false stop form submitting...
	    return false;
	});

}());

/**
 * Notification Demos.
 *
 */
(function()
{
	frontbx.DocsDemo('.js-notif-trigger-1', () =>
        frontbx.Notification({
            text  : `Hello! I'm a notification.`,
        })
    );
    frontbx.DocsDemo('.js-notif-trigger-2', () => frontbx.Notification(
    {
        btn  : `Dismiss`,
        text : `Hello! I'm a notification.`,
    }));
    frontbx.DocsDemo('.js-notif-trigger-3', () => frontbx.Notification(
    {
        icon : `bell`,
        text : `Hello! I'm a notification.`,
    }));
    frontbx.DocsDemo('.js-notif-trigger-4', () => frontbx.Notification(
    {
        btn        : `Danger`,
        btnVariant : `danger`,
        text       : `Hello! I'm a notification.`,
    }));
    frontbx.DocsDemo('.js-notif-trigger-5', () => frontbx.Notification(
    {
        icon    : `check`,
        variant : `success`, 
        text    : `Hello! I'm a notification.`,
    }));
    frontbx.DocsDemo('.js-notif-trigger-6', () => frontbx.Notification(
    {
        text: 'Hello! You need to click me to dismiss.',
        timeout: false,
    }));
    frontbx.DocsDemo('.js-notif-trigger-7', function()
    {
        let start = 10;
        let i     = 1;
        let timer = setInterval(() => this._.find('.js-time', notif.domElement()).innerText = (start - i++), 1000);

        let notif = frontbx.Notification(
        {
            text: 'Hello! I\'ll disappear in <span class="js-time">10</span> seconds.',
            timeout: 10000,
            callbackDismiss: () => clearInterval(timer)
        });
    });
    frontbx.DocsDemo('.js-notif-triggers-pos', (e, trigger) =>
    {
        frontbx.Notification({
            text: 'Hello! I\'m a notification.',
            position: trigger.innerText.trim()
        })
    });

}());

/**
 * Drawer Demos.
 *
 */
(function()
{
	const DRAWER_MENU = '<ul class="menu"><li><span class="item-left"><span class="fa fa-inbox color-gray-500"></span></span><span class="item-body">Inbox</span><span class="item-right"><span class="label">4</span></span>  </li>  <li><span class="item-left"><span class="fa fa-flag color-gray-500"></span></span><span class="item-body">Flagged</span><span class="item-right"><span class="label">23</span></span>  </li>  <li><span class="item-left"><span class="fa fa-note-sticky color-gray-500"></span></span><span class="item-body">Drafts</span><span class="item-right"><span class="label">3</span></span>  </li>  <li><span class="item-left"><span class="fa fa-paper-plane color-gray-500"></span></span><span class="item-body">Sent</span><span class="item-right"><span class="status status-xs"></span></span>  </li>  <li><span class="item-left"><span class="fa fa-circle-minus color-gray-500"></span></span><span class="item-body">Junk</span><span class="item-right"><span class="status status-xs status-warning"></span></span>  </li>  <li><span class="item-left"><span class="fa fa-trash color-gray-500"></span></span><span class="item-body">Trash</span><span class="item-right"><span class="status status-xs status-danger"></span></span>  </li> </ul>';
    
    let drawer1;
    let drawer2;

    frontbx.DocsDemo('.js-dw-trigger-1', () =>
    {        
        if (drawer2) drawer2 = drawer2.destroy();

        if (drawer1) return drawer1.open();

        drawer1 = frontbx.Drawer({ content : DRAWER_MENU });

    }, () => drawer1 ? drawer1 = drawer1.destroy() : null);

    
    frontbx.DocsDemo('.js-dw-trigger-2, .js-dw-trigger-3, .js-dw-trigger-4, .js-dw-trigger-5', (e, btn) =>
    {
        if (drawer1) drawer1 = drawer1.destroy();

        drawer2 = frontbx.Drawer({ direction : btn.innerText.toLowerCase().trim(), content : DRAWER_MENU });

    }, () => drawer2 ? drawer2 = drawer2.destroy() : null);

    const [on] = frontbx.import(['on']).from('_');

    on(window, 'frontbx:pjax:start', () => 
    {
        if (drawer1) drawer1 = drawer1.destroy();
        if (drawer2) drawer2 = drawer2.destroy();
    });

}());

/**
 * Backdrop Demos.
 *
 */
(function()
{
	const SKELETONS = 
	[
	    { lines: 1, variant: 'block-h3' },
	    { lines: 6, variant: 'text-block' },
	    { lines: 1, variant: 'block-h4' },
	    { lines: 3, variant: 'text-block' },
	];

    let backdrop1;
    let backdrop2;

    frontbx.DocsDemo('.js-bd-trigger-1', () =>
    {        
        if (backdrop2) backdrop2 = backdrop2.destroy();

        if (backdrop1) return backdrop1.closed() ? backdrop1.open() : backdrop1.close();

        backdrop1 = frontbx.Backdrop(
	    {
	        callbackBuilt: (container, drawer, overlay) => {
	            let pad = frontbx._().dom_element({tag: 'div', class: 'pad-20',}, frontbx._().find('.js-drawer-dialog', container));
	            frontbx.Skeleton(pad, SKELETONS)
	        },
	        state: 'collapsed',
	    });

        backdrop1.open();

    }, () => backdrop1 ? backdrop1 = backdrop1.destroy() : null);
   
    frontbx.DocsDemo('.js-bd-trigger-2', () =>
    {       
        if (backdrop1) backdrop1 = backdrop1.destroy();

        if (backdrop2) return backdrop2.closed() ? backdrop2.open() : backdrop2.close();
        
        backdrop2 = frontbx.Backdrop(
	    {
	        callbackBuilt: (container, drawer, overlay) => {
	            let pad = frontbx._().dom_element({tag: 'div', class: 'pad-20',}, frontbx._().find('.js-drawer-dialog', container));
	            frontbx.Skeleton(pad, SKELETONS)
	        },
	        state: 'collapsed',
	        pushbody: true,
	    });
        backdrop2.open();

    }, () => backdrop2 ? backdrop2 = backdrop2.destroy() : null);

    const [on] = frontbx.import(['on']).from('_');

    on(window, 'frontbx:pjax:start', () => 
    {
        if (backdrop1) backdrop1 = backdrop1.destroy();
        if (backdrop2) backdrop2 = backdrop2.destroy();
    });
    
}());

/**
 * Frontdrop Demos.
 *
 */
(function()
{
	const SKELETONS = 
	[
	    { lines: 1, variant: 'block-h3' },
	    { lines: 6, variant: 'text-block' },
	    { lines: 1, variant: 'block-h4' },
	    { lines: 8, variant: 'text-block' },
	];

    let frontdrop1;
    let frontdrop2;

    frontbx.DocsDemo('.js-fd-trigger-1', () =>
    {
        if (frontdrop2) frontdrop2 = frontdrop2.destroy();

        if (frontdrop1) return frontdrop1.closed() ? frontdrop1.open() : frontdrop1.close();
        
        frontdrop1 = frontbx.Frontdrop(
        {
            callbackBuilt: (container, drawer, overlay) => frontbx.Skeleton(frontbx._().find('.card-block .container-fluid', container), SKELETONS),
            state: 'collapsed'
        });

        frontdrop1.open();

    }, () => frontdrop1 ? frontdrop1 = frontdrop1.destroy() : null );

    
    frontbx.DocsDemo('.js-fd-trigger-2', () =>
    {
        if (frontdrop1) frontdrop1 = frontdrop1.destroy();

        if (frontdrop2) return frontdrop2.closed() ? frontdrop2.open() : frontdrop2.close();
        
        frontdrop2 = frontbx.Frontdrop(
        {
            callbackBuilt: (container, drawer, overlay) => frontbx.Skeleton(frontbx._().find('.card-block .container-fluid', container), SKELETONS),
            state: 'collapsed',
            confirmBtn: 'Confirm Choice',
        });

        frontdrop2.open();

    }, () => frontdrop2 ? frontdrop2 = frontdrop2.destroy() : null);

    const [on] = frontbx.import(['on']).from('_');

    on(window, 'frontbx:pjax:start', () => 
    {
        if (frontdrop1) frontdrop1 = frontdrop1.destroy();
        if (frontdrop2) frontdrop2 = frontdrop2.destroy();
    });

}());

/**
 * Range insert demo
 *
 */
(function()
{
    let inserted = false;

    let options =
    {
        min: 0,
        max: 100,
        value: 50,
        step: 1,
        labeled: false,
        indicators: false,
    };

    frontbx.DocsDemo('.js-insert-range-btn', (e, btn) =>
    {
        if (!inserted)
        {
            frontbx.Dom().create('RangeSlider', options, document.querySelector('.js-insert-range-container'))
            
            inserted = true;    
        }
    }, () => inserted = false);

}());