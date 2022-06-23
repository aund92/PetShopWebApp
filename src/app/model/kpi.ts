import {Material} from './material';

export class Kpi {
  id?: number;
  material?: Material;
  quantityKpi?: number;
  bonus?: number;
  startDate?: Date;
  endDate?: Date;
  sold?: number;
  status?: boolean;
}
