export default function t(t){let e=t;if(/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(e)){e=e.substr(2)}if(!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(e)){return{meta:{},valid:false}}const r=e.length;let a=0;let l;for(l=0;l<r-1;l++){a+=parseInt(e.charAt(l),10)*(1+l%9)}let f=a%11;if(f===10){a=0;for(l=0;l<r-1;l++){a+=parseInt(e.charAt(l),10)*(1+(l+2)%9)}}f=f%11%10;return{meta:{},valid:`${f}`===e.charAt(r-1)}}