<template>
  <main id="publications" class="content">
    <h1>Publications</h1>
    <section class="hal-preamble">
      <p>Below is my list of publications automatically extracted from HAL.
        You can also consult it directly on <a href="https://hal.archives-ouvertes.fr/search/index/?q=%2A&authIdHal_s=matthieu-viry&sort=producedDate_tdate+desc">HAL</a>
        or on <a href="https://www.semanticscholar.org/author/Matthieu-Viry/120089527">Semantic Scholar</a>.</p>
    </section>
    <section class="hal-container">
      <iframe
        id="hal-frame"
        title="Publications extracted from HAL"
        src="https://haltools.archives-ouvertes.fr/Public/afficheRequetePubli.php?idHal=matthieu-viry&CB_ref_biblio=oui&langue=Anglais&tri_exp=annee_publi&tri_exp2=typdoc&tri_exp3=date_publi&ordre_aff=TA&Fen=Aff&css=../css/VisuRubriqueEncadre.css"
      />
    </section>
  </main>
</template>

<script>
export default {
  name: 'Publications',
};
</script>

<style scoped>
#hal-frame {
  border: solid 1px lightgray;
  border-radius: 2px;
  width: 90%;
  height: calc(100vh - 320px);
}
.hal-container {
  text-align: center;
  height: calc(100vh - 347px);
}

</style>
