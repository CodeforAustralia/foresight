<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>KBDI_SFC</Name>
    <UserStyle>
      <Name>KBDI_SFC</Name>
      <Title>KBDI Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap type="intervals">
              <ColorMapEntry color="#B5D896" quantity="10" label=" 0  — &lt;10" />
              <ColorMapEntry color="#B2C9FF" quantity="25" label=" 10  — &lt;25" />
              <ColorMapEntry color="#FFFFB9" quantity="50" label=" 25  — &lt;50" />
              <ColorMapEntry color="#FFC44E" quantity="100" label=" 50  — &lt;100" />
              <ColorMapEntry color="#EE848C" quantity="150" label=" 100  — &lt;150" />
              <ColorMapEntry color="#CF5B5B" quantity="201" label=" 150  — 200" />
             
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>