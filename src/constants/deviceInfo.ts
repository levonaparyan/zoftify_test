import {
  getBrand,
  getDevice,
  getDeviceName,
  getHardware,
  getManufacturer,
  getModel,
  getVersion,
  isTablet,
  isEmulator as isDeviceEmulator,
} from 'react-native-device-info';

export const APP_VERSION = getVersion();
export const IS_TABLET = isTablet();

class DeviceDetails {
  name: string;
  brand: string;
  device: string;
  hardware: string;
  manufacturer: string;
  model: string | null;
  isEmulator: boolean;
  queryString: string;
  constructor() {
    this.name = '';
    this.brand = '';
    this.device = '';
    this.hardware = '';
    this.manufacturer = '';
    this.model = '';
    this.isEmulator = false;
    this.queryString = '';
  }

  async init() {
    try {
      const [deviceName, device, hardware, manufacturer, isEmulator] =
        await Promise.all([
          getDeviceName(),
          getDevice(),
          getHardware(),
          getManufacturer(),
          isDeviceEmulator(),
        ]);

      this.name = deviceName;
      this.device = device;
      this.hardware = hardware;
      this.manufacturer = manufacturer;
      this.isEmulator = isEmulator;

      this.brand = getBrand();
      this.model = getModel();

      this.generateHeaderString({
        name: this.name,
        device: this.device,
        hardware: this.hardware,
        manufacturer: this.manufacturer,
        brand: this.brand,
        model: this.model,
      });

      return;
    } catch (err) {
      return;
    }
  }

  generateHeaderString(data: Record<string, string>) {
    Object.entries(data).forEach(([key, value], index) => {
      if (index) {
        this.queryString += '&';
      }

      this.queryString += `${key}=(${value})`;
    });
  }
}

export const deviceDetails = new DeviceDetails();
