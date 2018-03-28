<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Curing_SFC</Name>
    <UserStyle>
      <Name>Curing_SFC</Name>
      <Title>Curing Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
             <ColorMap type="intervals">
              <ColorMapEntry color="#347812" quantity="0" label=" 0" />
              <ColorMapEntry color="#6AB928" quantity="10" label=" 1 — &lt;10" />
              <ColorMapEntry color="#93D432" quantity="20" label=" 11 — &lt;20" />
              <ColorMapEntry color="#B4E333" quantity="30" label="  21 — &lt;30" />
              <ColorMapEntry color="#D9F234" quantity="40" label=" 31 — &lt;40" />
              <ColorMapEntry color="#FFFF32" quantity="50" label=" 41 — &lt;50" />
              <ColorMapEntry color="#FFD634" quantity="60" label=" 51 — &lt;60" />
              <ColorMapEntry color="#FFAD33" quantity="70" label=" 61 — &lt;70" />
               <ColorMapEntry color="#FF8532" quantity="80" label=" 71 — &lt;80" />
              <ColorMapEntry color="#FF5B33" quantity="90" label=" 81 — &lt;90" />
              <ColorMapEntry color="#E00D0F" quantity="100" label=" 91 — &lt;100" />
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>