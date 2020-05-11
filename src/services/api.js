import request from '../utils/request';

export async function getToken(params) {
  return request('/api/zbids/app/gettoken/v1.0', {
    method: 'GET',
    params: {
      "appType": "pc",
      "appId": "pcWeb",
      "appKey": "e877000be408a6cb0428e0f584456e03"
    },
  });
}


export async function applyrestudy(params) {
  return request('/edu/courseApply/addCourseApply', {
    method: 'POST',
    data: params,
  });
}

export async function upload(params) {
  return request('/upload/base/file/upload', {
    method: 'POST',
    data: params,
    contentType:'multipart/form-data'
  });
}
