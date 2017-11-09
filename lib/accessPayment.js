// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   accessPayment.js                                   :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: cbarbier && fmaury                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2017/11/08 15:21:00 by fmaury            #+#    #+#             //
//   Updated: 2017/11/09 18:07:36 by cbarbier         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const accessPayment = {
	
	func: (id, size, method) => {
		const http = require('http');
		var options = {
			host: process.env.MICROPAYMENT_SERVER.split(":")[0],
			path: '/v0/access/' + id + '/method/' + method + '/size/' + size,
			port: process.env.MICROPAYMENT_SERVER.split(":")[1],
			method: 'POST'
		};
	
		callback = function(response) {
			var str = '';
		
			response.on('data', function (chunk) {
				str += chunk;
			});
		
			response.on('end', function () {
				console.log(str);
			});
		}
		http.request(options, callback).end();
	}
}

module.exports = accessPayment;
