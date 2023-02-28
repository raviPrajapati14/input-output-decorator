export interface ParentData {
  id: number;
  type: string;
  name: string;
  childData: ChildData[];
}

export interface ChildData {
  id: number;
  name: string;
}

export interface SampleDataType {
  parentData: ParentData[];
}

export const SAMPLE_DATA: SampleDataType = {
  parentData: [
    {
      id: 1,
      type: 'fruits',
      name: 'Fruits',
      childData: [
        {
          id: 101,
          name: 'Apple',
        },
        {
          id: 102,
          name: 'Banana',
        },
        {
          id: 103,
          name: 'Blackberry',
        },
        {
          id: 104,
          name: 'Cherry',
        },
        {
          id: 105,
          name: 'Grape',
        },
      ],
    },
    {
      id: 2,
      type: 'vegetable',
      name: 'Vegetables',
      childData: [
        {
          id: 201,
          name: 'Broccoli',
        },
        {
          id: 202,
          name: 'Carrots',
        },
        {
          id: 203,
          name: 'Cauliflower',
        },
        {
          id: 204,
          name: 'Green Beans',
        },
        {
          id: 205,
          name: 'Onions',
        },
      ],
    },
    {
      id: 3,
      type: 'herb',
      name: 'Herbs',
      childData: [
        {
          id: 301,
          name: 'Angelica',
        },
        {
          id: 302,
          name: 'Basil',
        },
        {
          id: 303,
          name: 'Woodruff',
        },
        {
          id: 304,
          name: 'Mint',
        },
        {
          id: 305,
          name: 'Garlic Chives',
        },
      ],
    },
    {
      id: 4,
      type: 'spice',
      name: 'Spices',
      childData: [
        {
          id: 401,
          name: 'Amchoor',
        },
        {
          id: 402,
          name: 'Anise',
        },
        {
          id: 403,
          name: 'Cardamom',
        },
        {
          id: 404,
          name: 'Cardamom',
        },
        {
          id: 405,
          name: 'Cinnamon',
        },
      ],
    },
  ],
};
