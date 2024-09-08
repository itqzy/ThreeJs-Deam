import * as THREE from 'three';

console.log(THREE);

//获取画布
const canvas = document.querySelector('canvas.webgl');

//创建场景 Scene
const scene = new THREE.Scene();

//创建一个几何体 geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
//创建材质  material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
// 对象模型  mesh
const mesh = new THREE.Mesh(geometry, material);
// 添加到场景中
scene.add(mesh);

// 创建高度和宽度
const sizes = {
    width: 800,
    height: 600,
};
// 透视相机 第一个参数是视角角度，第二个参数是宽高比，第三个参数是近端，第四个参数是远端
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// 相机和物体都在场景的默认位置即场景的中心，我们无法在内部看到物体

// 我们可以使用对象的position（位置）、rotation（旋转） scale（缩放）属性来移动、旋转和缩放对象

// position对象有x、y、z三个属性
camera.position.z = 3;

// 添加到场景中
scene.add(camera);


// 创建渲染器对象
const renderer = new THREE.WebGLRenderer(
    { canvas: canvas }
);
// 设置渲染器尺寸
renderer.setSize(sizes.width, sizes.height);

// 渲染
renderer.render(scene, camera);


