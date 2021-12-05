"use strict";

import { ManageAdminTabedMenu } from './admin';
import { hideNavAuto } from './hideNav';
import { setMap } from './mapBox';
import { loadCarouselContent } from './owlcarosuel';
import { prodQuant } from './product';

hideNavAuto();

prodQuant();

loadCarouselContent();

setMap();

ManageAdminTabedMenu();





