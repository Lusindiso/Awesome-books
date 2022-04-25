import { handleClick } from "./modules/handleClick.js";
import { handleSubmit } from "./modules/form.js";
import { DateTime } from "./modules/luxon.js";
import { dateTime } from "./modules/selectors.js";

dateTime.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED)


handleClick();
handleSubmit();