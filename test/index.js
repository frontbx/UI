import 'jsdom-global/register.js';
import { use, expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import frontbx from '../dist/js/frontbx.esm.js';
const chai  = use(sinonChai);