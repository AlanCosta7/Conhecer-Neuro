<template>
  <q-page>
    <div class="q-pa-md fit">
        <form
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        >
      <q-editor
        v-model="editor"
        ref="editor_ref"
        @paste.native="evt => pasteCapture(evt)"
        flat
        :definitions="definitions"
        content-class="bg-grey-3"
        toolbar-text-color="white"
        toolbar-toggle-color="white"
        toolbar-bg="primary"
        :toolbar="[
        ['bold', 'italic', 'underline', 'left', 'center', 'right', 'justify', 'insert_img'],
        [{
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
        },
        {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
        :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
      />
    </form>
    </div>
    <q-btn label="Salvar" color="positive" @click="salvar"></q-btn>
  </q-page>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'PageIntrodução',
  data() {
    return {
      definitions: {
        insert_img: {
          tip: 'Insertar Imagen',
          icon: 'photo',
          handler: this.insertImg, // handler will call insertImg() method
        },
      },
      editor: '',
      id: '',
    };
  },
  computed: {
    ...Vuex.mapGetters({
      intro: 'module/intro',
    }),
  },
  watch: {
    intro(newData, oldData) {
      if (Array.isArray(newData) && newData.length) {
        this.editor = newData[0].data.newdata;
        this.id = newData[0].id;
      } else {
        this.editor = oldData;
      }
    },
  },
  async created() {
    await this.$store.dispatch('module/watchIntro');
  },
  async beforeDestroy() {
    await this.$store.dispatch('module/unwatchIntro');
  },
  methods: {
    salvar() {
      const editor = this.editor; // eslint-disable-line
      const id = this.id; // eslint-disable-line
      const newData = {
        content: { data: editor },
        add: 'addIntro',
        update: 'updateIntro',
        id: this.id,
      };
      this.$store.dispatch('module/autosaverPlugin', newData);
    },
    insertImg() { // insertImg method
      const editor = this.editor; // eslint-disable-line
      // create an input file element to open file dialog
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.png, .jpg'; // file extensions allowed
      let file;
      input.onchange = _ => { // eslint-disable-line
        const files = Array.from(input.files);
        file = files[0]; // eslint-disable-line

        // lets load the file as dataUrl
        const reader = new FileReader();
        let dataUrl = '';
        reader.onloadend = function () { // eslint-disable-line
          dataUrl = reader.result;

          // append result to the body of your post
          document.execCommand('insertHTML', true, '<div><img src="' + dataUrl + '" /></div>'); // eslint-disable-line
        };
        reader.readAsDataURL(file);
      };
      input.click();
    },
    pasteCapture(evt) {
      let text; let
        onPasteStripFormattingIEPaste;
      evt.preventDefault();
      if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
        text = evt.originalEvent.clipboardData.getData('text/plain');
        this.$refs.editor_ref.runCmd('insertText', text);
      } else if (evt.clipboardData && evt.clipboardData.getData) {
        text = evt.clipboardData.getData('text/plain');
        this.$refs.editor_ref.runCmd('insertText', text);
      } else if (window.clipboardData && window.clipboardData.getData) {
        if (!onPasteStripFormattingIEPaste) {
          onPasteStripFormattingIEPaste = true;
          this.$refs.editor_ref.runCmd('ms-pasteTextOnly', text);
        }
        onPasteStripFormattingIEPaste = false;
      }
    },
  },
};
</script>
