import utils from './utils/index';

const property: string = 'SFUX';
if (!Reflect.has(window, property)) Object.defineProperty(window, property, { value: utils });
else throw new Error(`${property}注入文件挂载失败, 检查是否已经上传类似文件。`);
