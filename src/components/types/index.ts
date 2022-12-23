export class Vector3<T = number> {
  x: T;
  y: T;
  z: T;

  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  static zero() {
    return new Vector3(0, 0, 0);
  }
};
