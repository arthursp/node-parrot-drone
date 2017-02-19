'use strict';
/*************************************************\
generated from arsdk-xml/xml/*.xml
generated by utils/convertSDK.js
generated on : 2/19/2017, 7:43:36 AM
\**************************************************/
const projects={"feature":{"info":{"id":"140","name":"controller_info"},"details":"Controller info feature","enums":{},"msgs":{"gps":{"info":{"tagType":"cmd","name":"gps","id":"1"},"comment":{"info":{"title":"Controller gps info","desc":"Controller gps info.\\n This command should be sent on a non acknowledged buffer if it is sent periodically,\\n and on an acknowledged buffer otherwise.","result":"The position of the controller is known by the drone.\\n It can be used for RTH or FollowMe."}},"latitude":{"info":{"tagType":"arg","name":"latitude","type":"double"},"details":"Latitude of the controller (in deg)"},"longitude":{"info":{"tagType":"arg","name":"longitude","type":"double"},"details":"Longitude of the controller (in deg)"},"altitude":{"info":{"tagType":"arg","name":"altitude","type":"float"},"details":"Altitude of the controller (in meters, according to sea level)"},"horizontal_accuracy":{"info":{"tagType":"arg","name":"horizontal_accuracy","type":"float"},"details":"Horizontal accuracy (in meter)"},"vertical_accuracy":{"info":{"tagType":"arg","name":"vertical_accuracy","type":"float"},"details":"Vertical accuracy (in meter)"},"north_speed":{"info":{"tagType":"arg","name":"north_speed","type":"float"},"details":"North speed (in meter per second)"},"east_speed":{"info":{"tagType":"arg","name":"east_speed","type":"float"},"details":"East speed (in meter per second)"},"down_speed":{"info":{"tagType":"arg","name":"down_speed","type":"float"},"details":"Vertical speed (in meter per second) (down is positive)"},"timestamp":{"info":{"tagType":"arg","name":"timestamp","type":"double"},"details":"Timestamp of the gps info"}},"barometer":{"info":{"tagType":"cmd","name":"barometer","id":"2"},"comment":{"info":{"title":"Controller barometer info","result":"The altitude of the controller is known by the drone."}},"pressure":{"info":{"tagType":"arg","name":"pressure","type":"float"},"details":"Atmospheric pressure in Pa"},"timestamp":{"info":{"tagType":"arg","name":"timestamp","type":"double"},"details":"Timestamp of the barometer info"}}}},"lookup":{}}

module.exports=projects;
              