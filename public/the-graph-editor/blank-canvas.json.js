loadGraph({
  "properties": {
    "name": "hindi_panjabi"
  },
  "inports": {

  },
  "outports": {

  },
  "groups": [
    {
      "name": "Post Processor",
      "nodes": [
        "core\/random_merger_9m9k5",
        "core\/echo_aaipx"
      ],
      "metadata": {
        "description": "",
        "container": {
          "className": "group"
        },
        "boxRect": {
          "ref": "box",
          "rx": 8,
          "ry": 8
        },
        "labelText": {
          "ref": "label",
          "className": "group-label drag"
        },
        "descriptionText": {
          "className": "group-description"
        }
      }
    },
    {
      "name": "Core Logic",
      "nodes": [
        "core\/echo_35o",
        "core\/echo_5ar4e",
        "core\/echo_k5gx7",
        "core\/random_merger_y840c",
        "core\/echo_ndqpk",
        "core\/echo_fh928",
        "core\/echo_9u1xa"
      ],
      "metadata": {
        "description": "",
        "container": {
          "className": "group"
        },
        "boxRect": {
          "ref": "box",
          "rx": 8,
          "ry": 8
        },
        "labelText": {
          "ref": "label",
          "className": "group-label drag"
        },
        "descriptionText": {
          "className": "group-description"
        }
      }
    },
    {
      "name": "Pre processing",
      "nodes": [
        "core\/random_merger_251v",
        "core\/echo_f8aai",
        "core\/echo_9nv01",
        "core\/echo_5r97q",
        "core\/echo_2g7m5",
        "core\/echo_1jb89"
      ],
      "metadata": {
        "description": "",
        "container": {
          "className": "group"
        },
        "boxRect": {
          "ref": "box",
          "rx": 8,
          "ry": 8
        },
        "labelText": {
          "ref": "label",
          "className": "group-label drag"
        },
        "descriptionText": {
          "className": "group-description"
        }
      }
    },
    {
      "name": "Sampark Hindi Panjabi Pipeline",
      "nodes": [
        "hindi_panjabi\/wordgenerator_ezxo",
        "hindi_panjabi\/computevibhakti_24bs",
        "hindi_panjabi\/interchunk_9cph",
        "hindi_panjabi\/root2infinity_j53m",
        "hindi_panjabi\/intrachunk_5j88",
        "hindi_panjabi\/tokenizer_yj5u",
        "hindi_panjabi\/chunker_jyoh",
        "hindi_panjabi\/morph_jsqt",
        "hindi_panjabi\/transfergrammar_c600",
        "hindi_panjabi\/guessmorph_qapk",
        "hindi_panjabi\/postagger_hm6h",
        "hindi_panjabi\/pickonemorph_yb5f",
        "hindi_panjabi\/agreementfeature_wdk5",
        "hindi_panjabi\/parse_kh5q",
        "hindi_panjabi\/computehead_bg60",
        "hindi_panjabi\/transliterate_kif4",
        "hindi_panjabi\/agreementdistribution_si5q",
        "hindi_panjabi\/lexicaltransfer_m0gl",
        "hindi_panjabi\/pruning_6iv9",
        "hindi_panjabi\/vibhaktispliter_or14",
        "hindi_panjabi\/wx2utf_irg8",
        "hindi_panjabi\/defaultfeatures_sewl",
        "hindi_panjabi\/utf2wx_acs9"
      ],
      "metadata": {
        "description": "",
        "container": {
          "className": "group"
        },
        "boxRect": {
          "ref": "box",
          "rx": 8,
          "ry": 8
        },
        "labelText": {
          "ref": "label",
          "className": "group-label drag"
        },
        "descriptionText": {
          "className": "group-description"
        }
      }
    },
    {
      "name": "Forked Sampark Pipeline",
      "nodes": [
        "hindi_panjabi\/wordgenerator_e4lu6",
        "hindi_panjabi\/interchunk_stglk",
        "hindi_panjabi\/intrachunk_8peby",
        "hindi_panjabi\/agreementfeature_zdx2h",
        "hindi_panjabi\/transliterate_rfj7v",
        "hindi_panjabi\/agreementdistribution_qig3e",
        "hindi_panjabi\/vibhaktispliter_en13z",
        "hindi_panjabi\/defaultfeatures_1jvyz"
      ],
      "metadata": {
        "description": "",
        "container": {
          "className": "group"
        },
        "boxRect": {
          "ref": "box",
          "rx": 8,
          "ry": 8
        },
        "labelText": {
          "ref": "label",
          "className": "group-label drag"
        },
        "descriptionText": {
          "className": "group-description"
        }
      }
    }
  ],
  "processes": {
    "core\/sentence_output_1zk7": {
      "component": "core\/sentence_output",
      "metadata": {
        "y": -36,
        "x": 3672,
        "height": 72,
        "width": 72,
        "label": "Sentence Output",
        "progress": 100
      }
    },
    "hindi_panjabi\/wordgenerator_ezxo": {
      "component": "hindi_panjabi\/wordgenerator",
      "metadata": {
        "y": 108,
        "x": 3240,
        "height": 72,
        "width": 72,
        "label": "wordgenerator",
        "progress": 100
      }
    },
    "hindi_panjabi\/computevibhakti_24bs": {
      "component": "hindi_panjabi\/computevibhakti",
      "metadata": {
        "y": 72,
        "x": 1584,
        "height": 72,
        "width": 72,
        "label": "computevibhakti",
        "progress": 100
      }
    },
    "hindi_panjabi\/interchunk_9cph": {
      "component": "hindi_panjabi\/interchunk",
      "metadata": {
        "y": 180,
        "x": 2700,
        "height": 72,
        "width": 72,
        "label": "interchunk",
        "progress": 100
      }
    },
    "hindi_panjabi\/root2infinity_j53m": {
      "component": "hindi_panjabi\/root2infinity",
      "metadata": {
        "y": 72,
        "x": 1836,
        "height": 72,
        "width": 72,
        "label": "root2infinity",
        "progress": 100
      }
    },
    "core\/sentence_input_1zk7": {
      "component": "core\/sentence_input",
      "metadata": {
        "y": 252,
        "x": -216,
        "height": 72,
        "width": 72,
        "label": "Sentence Input",
        "progress": 100
      }
    },
    "hindi_panjabi\/intrachunk_5j88": {
      "component": "hindi_panjabi\/intrachunk",
      "metadata": {
        "y": 180,
        "x": 2844,
        "height": 72,
        "width": 72,
        "label": "intrachunk",
        "progress": 100
      }
    },
    "hindi_panjabi\/tokenizer_yj5u": {
      "component": "hindi_panjabi\/tokenizer",
      "metadata": {
        "y": 144,
        "x": 396,
        "height": 72,
        "width": 72,
        "label": "tokenizer",
        "progress": 100
      }
    },
    "hindi_panjabi\/chunker_jyoh": {
      "component": "hindi_panjabi\/chunker",
      "metadata": {
        "y": 180,
        "x": 900,
        "height": 72,
        "width": 72,
        "label": "chunker",
        "progress": 100
      }
    },
    "hindi_panjabi\/morph_jsqt": {
      "component": "hindi_panjabi\/morph",
      "metadata": {
        "y": 180,
        "x": 648,
        "height": 72,
        "width": 72,
        "label": "morph",
        "progress": 100
      }
    },
    "hindi_panjabi\/transfergrammar_c600": {
      "component": "hindi_panjabi\/transfergrammar",
      "metadata": {
        "y": 252,
        "x": 1980,
        "height": 72,
        "width": 72,
        "label": "transfergrammar",
        "progress": 100
      }
    },
    "hindi_panjabi\/guessmorph_qapk": {
      "component": "hindi_panjabi\/guessmorph",
      "metadata": {
        "y": 180,
        "x": 1152,
        "height": 72,
        "width": 72,
        "label": "guessmorph",
        "progress": 100
      }
    },
    "hindi_panjabi\/postagger_hm6h": {
      "component": "hindi_panjabi\/postagger",
      "metadata": {
        "y": 72,
        "x": 792,
        "height": 72,
        "width": 72,
        "label": "postagger",
        "progress": 100
      }
    },
    "hindi_panjabi\/pickonemorph_yb5f": {
      "component": "hindi_panjabi\/pickonemorph",
      "metadata": {
        "y": 72,
        "x": 1296,
        "height": 72,
        "width": 72,
        "label": "pickonemorph",
        "progress": 100
      }
    },
    "hindi_panjabi\/agreementfeature_wdk5": {
      "component": "hindi_panjabi\/agreementfeature",
      "metadata": {
        "y": 180,
        "x": 2448,
        "height": 72,
        "width": 72,
        "label": "agreementfeature",
        "progress": 100
      }
    },
    "hindi_panjabi\/parse_kh5q": {
      "component": "hindi_panjabi\/parse",
      "metadata": {
        "y": 0,
        "x": 1728,
        "height": 72,
        "width": 72,
        "label": "parse",
        "progress": 100
      }
    },
    "hindi_panjabi\/computehead_bg60": {
      "component": "hindi_panjabi\/computehead",
      "metadata": {
        "y": 108,
        "x": 1440,
        "height": 72,
        "width": 72,
        "label": "computehead",
        "progress": 100
      }
    },
    "hindi_panjabi\/transliterate_kif4": {
      "component": "hindi_panjabi\/transliterate",
      "metadata": {
        "y": 108,
        "x": 2340,
        "height": 72,
        "width": 72,
        "label": "transliterate",
        "progress": 100
      }
    },
    "hindi_panjabi\/agreementdistribution_si5q": {
      "component": "hindi_panjabi\/agreementdistribution",
      "metadata": {
        "y": 252,
        "x": 2952,
        "height": 72,
        "width": 72,
        "label": "agreementdistribution",
        "progress": 100
      }
    },
    "hindi_panjabi\/lexicaltransfer_m0gl": {
      "component": "hindi_panjabi\/lexicaltransfer",
      "metadata": {
        "y": 396,
        "x": 2232,
        "height": 72,
        "width": 72,
        "label": "lexicaltransfer",
        "progress": 100
      }
    },
    "hindi_panjabi\/pruning_6iv9": {
      "component": "hindi_panjabi\/pruning",
      "metadata": {
        "y": 288,
        "x": 1008,
        "height": 72,
        "width": 72,
        "label": "pruning",
        "progress": 100
      }
    },
    "hindi_panjabi\/vibhaktispliter_or14": {
      "component": "hindi_panjabi\/vibhaktispliter",
      "metadata": {
        "y": 252,
        "x": 2592,
        "height": 72,
        "width": 72,
        "label": "vibhaktispliter",
        "progress": 100
      }
    },
    "hindi_panjabi\/wx2utf_irg8": {
      "component": "hindi_panjabi\/wx2utf",
      "metadata": {
        "y": 180,
        "x": 2124,
        "height": 72,
        "width": 72,
        "label": "wx2utf",
        "progress": 100
      }
    },
    "hindi_panjabi\/defaultfeatures_sewl": {
      "component": "hindi_panjabi\/defaultfeatures",
      "metadata": {
        "y": 180,
        "x": 3096,
        "height": 72,
        "width": 72,
        "label": "defaultfeatures",
        "progress": 100
      }
    },
    "hindi_panjabi\/utf2wx_acs9": {
      "component": "hindi_panjabi\/utf2wx",
      "metadata": {
        "y": 252,
        "x": 540,
        "height": 72,
        "width": 72,
        "label": "utf2wx",
        "progress": 100
      }
    },
    "core\/echo_35o": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 2124,
        "y": -1008,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/random_merger_251v": {
      "component": "core\/random_merger",
      "metadata": {
        "label": "Randomizer",
        "x": 1152,
        "y": -612,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_f8aai": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 1296,
        "y": -792,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_5ar4e": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 1656,
        "y": -504,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_k5gx7": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 1836,
        "y": -252,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_9nv01": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 900,
        "y": -324,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_5r97q": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 900,
        "y": -504,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_2g7m5": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 540,
        "y": -720,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_1jb89": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 828,
        "y": -864,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/random_merger_y840c": {
      "component": "core\/random_merger",
      "metadata": {
        "label": "Randomizer",
        "x": 2124,
        "y": -540,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_ndqpk": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 1656,
        "y": -324,
        "width": 72,
        "height": 72,
        "progress": 100
      }
    },
    "core\/echo_fh928": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 2376,
        "y": -648,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_9u1xa": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 2376,
        "y": -828,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/random_merger_9m9k5": {
      "component": "core\/random_merger",
      "metadata": {
        "label": "Randomizer",
        "x": 2952,
        "y": -396,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/echo_aaipx": {
      "component": "core\/echo",
      "metadata": {
        "label": "Echo",
        "x": 3348,
        "y": -612,
        "width": 72,
        "height": 72,
        "progress": 0
      }
    },
    "core\/sentence_output_5tztn": {
      "component": "core\/sentence_output",
      "metadata": {
        "y": -828,
        "x": 3600,
        "height": 72,
        "width": 72,
        "label": "Sentence Output",
        "progress": 0
      }
    },
    "hindi_panjabi\/wordgenerator_e4lu6": {
      "component": "hindi_panjabi\/wordgenerator",
      "metadata": {
        "y": 648,
        "x": 3348,
        "height": 72,
        "width": 72,
        "label": "wordgenerator",
        "progress": 100
      }
    },
    "hindi_panjabi\/interchunk_stglk": {
      "component": "hindi_panjabi\/interchunk",
      "metadata": {
        "y": 720,
        "x": 2808,
        "height": 72,
        "width": 72,
        "label": "interchunk",
        "progress": 100
      }
    },
    "hindi_panjabi\/intrachunk_8peby": {
      "component": "hindi_panjabi\/intrachunk",
      "metadata": {
        "y": 720,
        "x": 2952,
        "height": 72,
        "width": 72,
        "label": "intrachunk",
        "progress": 100
      }
    },
    "hindi_panjabi\/agreementfeature_zdx2h": {
      "component": "hindi_panjabi\/agreementfeature",
      "metadata": {
        "y": 720,
        "x": 2556,
        "height": 72,
        "width": 72,
        "label": "agreementfeature_v2",
        "progress": 100
      }
    },
    "hindi_panjabi\/transliterate_rfj7v": {
      "component": "hindi_panjabi\/transliterate",
      "metadata": {
        "y": 648,
        "x": 2448,
        "height": 72,
        "width": 72,
        "label": "transliterate_v2",
        "progress": 100
      }
    },
    "hindi_panjabi\/agreementdistribution_qig3e": {
      "component": "hindi_panjabi\/agreementdistribution",
      "metadata": {
        "y": 792,
        "x": 3060,
        "height": 72,
        "width": 72,
        "label": "agreementdistribution",
        "progress": 100
      }
    },
    "hindi_panjabi\/vibhaktispliter_en13z": {
      "component": "hindi_panjabi\/vibhaktispliter",
      "metadata": {
        "y": 792,
        "x": 2700,
        "height": 72,
        "width": 72,
        "label": "vibhaktispliter_v2",
        "progress": 100
      }
    },
    "hindi_panjabi\/defaultfeatures_1jvyz": {
      "component": "hindi_panjabi\/defaultfeatures",
      "metadata": {
        "y": 720,
        "x": 3204,
        "height": 72,
        "width": 72,
        "label": "defaultfeatures",
        "progress": 100
      }
    },
    "core\/custom_module_dpl": {
      "component": "core\/custom_module",
      "metadata": {
        "label": "Kathaa-fier",
        "x": 108,
        "y": -432,
        "width": 72,
        "height": 72,
        "progress": 100
      }
    },
    "core\/sentence_output_ar8sf": {
      "component": "core\/sentence_output",
      "metadata": {
        "y": 540,
        "x": 3636,
        "height": 72,
        "width": 72,
        "label": "Sentence Output",
        "progress": 100
      }
    }
  },
  "connections": [
    {
      "src": {
        "process": "hindi_panjabi\/utf2wx_acs9",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/morph_jsqt",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/morph_jsqt",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/postagger_hm6h",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/postagger_hm6h",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/chunker_jyoh",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/chunker_jyoh",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/pruning_6iv9",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/pruning_6iv9",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/guessmorph_qapk",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/guessmorph_qapk",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/pickonemorph_yb5f",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/pickonemorph_yb5f",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/computehead_bg60",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/computehead_bg60",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/computevibhakti_24bs",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/computevibhakti_24bs",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/parse_kh5q",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/parse_kh5q",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/root2infinity_j53m",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/root2infinity_j53m",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/transfergrammar_c600",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/transfergrammar_c600",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/wx2utf_irg8",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/wx2utf_irg8",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/lexicaltransfer_m0gl",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/lexicaltransfer_m0gl",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/transliterate_kif4",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/transliterate_kif4",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/agreementfeature_wdk5",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/agreementfeature_wdk5",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/vibhaktispliter_or14",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/vibhaktispliter_or14",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/interchunk_9cph",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/interchunk_9cph",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/intrachunk_5j88",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/intrachunk_5j88",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/agreementdistribution_si5q",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/agreementdistribution_si5q",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/defaultfeatures_sewl",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/defaultfeatures_sewl",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/wordgenerator_ezxo",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/wordgenerator_ezxo",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/sentence_output_1zk7",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "core\/echo_1jb89",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_251v",
        "port": "in_ssf_1"
      },
      "metadata": {
        "route": "7"
      }
    },
    {
      "src": {
        "process": "core\/echo_2g7m5",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_251v",
        "port": "in_ssf_2"
      },
      "metadata": {
        "route": "4"
      }
    },
    {
      "src": {
        "process": "core\/echo_5r97q",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_251v",
        "port": "in_ssf_3"
      },
      "metadata": {
        "route": "1"
      }
    },
    {
      "src": {
        "process": "core\/echo_9nv01",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_251v",
        "port": "in_ssf_4"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "core\/random_merger_251v",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/echo_f8aai",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "core\/echo_f8aai",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_y840c",
        "port": "in_ssf_1"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "core\/echo_ndqpk",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_y840c",
        "port": "in_ssf_3"
      },
      "metadata": {
        "route": "2"
      }
    },
    {
      "src": {
        "process": "core\/echo_k5gx7",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_y840c",
        "port": "in_ssf_4"
      },
      "metadata": {
        "route": "9"
      }
    },
    {
      "src": {
        "process": "core\/echo_5ar4e",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_y840c",
        "port": "in_ssf_2"
      },
      "metadata": {
        "route": "7"
      }
    },
    {
      "src": {
        "process": "core\/echo_9nv01",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/echo_5ar4e",
        "port": "in_ssf"
      },
      "metadata": {
        "route": "7"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/pickonemorph_yb5f",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/echo_ndqpk",
        "port": "in_ssf"
      },
      "metadata": {
        "route": "2"
      }
    },
    {
      "src": {
        "process": "core\/random_merger_y840c",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/echo_fh928",
        "port": "in_ssf"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "core\/echo_f8aai",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/echo_35o",
        "port": "in_ssf"
      },
      "metadata": {
        "route": "8"
      }
    },
    {
      "src": {
        "process": "core\/echo_35o",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/echo_9u1xa",
        "port": "in_ssf"
      },
      "metadata": {
        "route": "8"
      }
    },
    {
      "src": {
        "process": "core\/echo_9u1xa",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_9m9k5",
        "port": "in_ssf_1"
      },
      "metadata": {
        "route": "8"
      }
    },
    {
      "src": {
        "process": "core\/echo_fh928",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_9m9k5",
        "port": "in_ssf_2"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/interchunk_9cph",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/random_merger_9m9k5",
        "port": "in_ssf_4"
      },
      "metadata": {
        "route": "6"
      }
    },
    {
      "src": {
        "process": "core\/random_merger_9m9k5",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/echo_aaipx",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "core\/echo_aaipx",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/sentence_output_5tztn",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/transliterate_rfj7v",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/agreementfeature_zdx2h",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/agreementfeature_zdx2h",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/vibhaktispliter_en13z",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/vibhaktispliter_en13z",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/interchunk_stglk",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/interchunk_stglk",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/intrachunk_8peby",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/intrachunk_8peby",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/agreementdistribution_qig3e",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/agreementdistribution_qig3e",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/defaultfeatures_1jvyz",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/defaultfeatures_1jvyz",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/wordgenerator_e4lu6",
        "port": "in_ssf"
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/lexicaltransfer_m0gl",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/transliterate_rfj7v",
        "port": "in_ssf"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core\/sentence_input_1zk7",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/tokenizer_yj5u",
        "port": "in_ssf"
      },
      "metadata": {
        "route": null
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/tokenizer_yj5u",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/utf2wx_acs9",
        "port": "in_ssf"
      },
      "metadata": {
        "route": null
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/tokenizer_yj5u",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/custom_module_dpl",
        "port": "input_1"
      },
      "metadata": {
        "route": 0
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/guessmorph_qapk",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "hindi_panjabi\/lexicaltransfer_m0gl",
        "port": "in_ssf_guessmorph"
      },
      "metadata": {
        "route": 0
      }
    },
    {
      "src": {
        "process": "hindi_panjabi\/wordgenerator_e4lu6",
        "port": "out_ssf"
      },
      "tgt": {
        "process": "core\/sentence_output_ar8sf",
        "port": "in_ssf"
      }
    }
  ]
})
