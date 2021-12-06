"use strict";

import { ManageAdminTabedMenu } from "./admin";
import { hideNavAuto } from "./hideNav";
import { loginEvent } from "./login";
import { setMap } from "./mapBox";
import { loadCarouselContent } from "./owlcarosuel";
import { prodQuant } from "./product";
import { search } from "./search";

hideNavAuto();

prodQuant();

loadCarouselContent();

setMap();

ManageAdminTabedMenu();

search();

loginEvent();