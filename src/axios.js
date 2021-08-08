import axios from "axios";
import { message as antMessage } from "antd";

const codeMessage = {
	200: "服务器成功返回请求的数据。",
	201: "新建或修改数据成功。",
	202: "一个请求已经进入后台排队（异步任务）。",
	204: "删除数据成功。",
	400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
	401: "用户没有权限（令牌、用户名、密码错误）。",
	403: "用户得到授权，但是访问是被禁止的。",
	404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
	406: "请求的格式不可得。",
	410: "请求的资源被永久删除，且不会再得到的。",
	422: "当创建一个对象时，发生一个验证错误。",
	500: "服务器发生错误，请检查服务器。",
	502: "网关错误。",
	503: "服务不可用，服务器暂时过载或维护。",
	504: "网关超时。"
};
const instance = axios.create({
	baseURL: "https://api.instantwebtools.net/v1",
	headers: {
		"Content-Type": "application/json"
		// 'response-status': 500,
	}
});

// http request 拦截器
instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

instance.interceptors.response.use(
	(response) => {
		return Promise.resolve(response.data);
	},
	(error) => {
		console.log("error", error);
		const { response } = error;
		if (response?.status) {
			const { status, statusText, data } = response;
			const messageFunc = status >= 500 ? antMessage.error : antMessage.warning;
			let message;
			if (data && typeof data === "object" && "error" in data) {
				message = data?.error.message;
			}
			const errorText = message || codeMessage[status] || statusText;
			messageFunc(errorText).then();
		}
		if (!response) {
			antMessage.error("网络错误，请重试").then();
		}
		return Promise.reject(error);
	}
);

const get = (url, params, option) => {
	return instance.get(url, { ...option, params });
};
const del = (url, params, option) => {
	return instance.delete(url, { ...option, params });
};
const head = (url, params, option) => {
	return instance.head(url, { ...option, params });
};
const options = (url, params, option) => {
	return instance.options(url, { ...option, params });
};
const post = (url, data, option) => {
	return instance.post(url, data, option);
};
const put = (url, data, option) => {
	return instance.put(url, data, option);
};
const patch = (url, data, option) => {
	return instance.patch(url, data, option);
};

export {
	get,
	del,
	head,
	options,
	post,
	put,
	patch,
};
export default instance;
